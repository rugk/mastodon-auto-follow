/**
 * Handles operations in tabs.
 *
 * @module TabHandler
 */

/**
 * Return the owner of the popup tab, i.e the tab that opened this tab.
 *
 * @public
 * @param {int} tabId
 * @param {Object} requestDetails
 * @returns {int|null} opener tab ID
 */
export async function getPopupOwnerTab(tabId, requestDetails) {
    const ownTab = await browser.tabs.get(tabId);
    let openerTabId = ownTab.openerTabId;

    // fallback to manually finding opener tab
    // because the openerTabId is not always set, see
    // https://discourse.mozilla.org/t/openertabid-not-present-in-tab-opened-as-a-popup-getting-opener-tab-of-popup/46844?u=rugkx
    if (!openerTabId) {
        try {
            openerTabId = (await findBrowserTab({
                url: requestDetails.originUrl,
                excludeTabId: tabId,
                active: true
            })).id; // get ID
        } catch (e) {
            // ignore issues and just use openerTabId from before or null
        }
    }
    return openerTabId || null;
}

/**
 * Return the currently active tab.
 *
 * @private
 * @param {Object} data
 * @returns {Promise} int|null, opener tab ID
 */
async function findBrowserTab({
    url, excludeTabId, active
}) {
    const tabsFind = await browser.tabs.query({
        url,
        active
    });

    // filter tabs
    const tabFilter = tabsFind.filter((tab) => tab.id !== excludeTabId);

    if (!tabFilter || tabFilter.length === 0) {
        // fallback to non-active search
        if (active) {
            return findBrowserTab({url: url, excludeTabId: excludeTabId, active: false});
        }
        return null;
    }

    return tabFilter[0];
}

/**
 * Close a tab that is not needed anymore.
 *
 * @public
 * @param {int} tabId
 * @returns {Promise}
 * @see {@link https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/tabs/remove}
 */
export function closeTab(tabId) {
    return browser.tabs.remove(tabId);
}

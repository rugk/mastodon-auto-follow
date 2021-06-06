# Permissions demandées

Pour une explication générale des permissions de l'add-on, veuillez consulter [cet article de support](https://support.mozilla.org/kb/permission-request-messages-firefox-extensions).

## Permissions d'installation

| ID interne                  | Permission                        | Explication                                                                                                                                                                                                                                                                                                                     |
|:----------------------------|:----------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `http://*/*`, `https://*/*` | L'accès à vos données sur tous les sites | Requis pour obtenir l'accès à n'importe quel site d'un serveur qui pourrait être une instance Mastodon. Comme n'importe quel serveur pourrait être une instance Mastodon, il a besoin d'obtenir toutes les données [HTTP](https://fr.wikipedia.org/wiki/HTTP) et [HTTPS](https://fr.wikipedia.org/wiki/HTTPS) [URLs](https://en.wikipedia.org/wiki/Uniform_Resource_Locator). |
| `notifications` | Vous affiche les notifications | Requis pour vous montrer une notification dans le cas d'une redirection où si quelque chose d'autre échoue |

## Permissions cachées
Additionnellement, l'add-on demande ces permissions, qui ne sont pas montrées dans Firefox quand l'add-on est installé, vu qu'ils ne sont pas des permissions importantes.

| ID interne  | Permission           | Explication                                                                                                                                |
|:-------------|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|
| `webRequest` | L'accès aux requêtes web  | Requis pour rediriger les [URLs](https://fr.wikipedia.org/wiki/Uniform_Resource_Locator) vers le serveur, où vous possédez un compte Mastodon. |
| `storage`    | L'accès au stockage local | Requis pour sauvegarder les options                                                                                                                 |
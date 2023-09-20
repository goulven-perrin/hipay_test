
# Hipay Test

L’objectif est de créer une API qui va récupérer les données renvoyées par une
autre API.



## Authors

- [@Perrin Goulven](https://www.github.com/goulven-perrin)


## Outils conseillé

- Postman
- Visual Studio


## API Reference

#### Get message

```http
  GET /
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| none | `string` | un  message indiquant que le serveur est bien activé  |

#### Seach

```http
  GET /Seach avec header family
```

| header | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `family`      | `string` | **Type family**.|


## Optimisation

Créer un site WEB pour gérer la communication entre l'utilisateur et l'API

Rechercher dans l'API si toutes les familles sont composées sous la forme "nom family" pour supprimer la partie family demander dans le header



Effectuer des tests si L'API est sensible à la casse avec les accents Aucune famille avec accents a été trouvée Aucun test possible 
## Sources

[Trefle.io](https://docs.trefle.io/docs/guides/getting-started)

[npm axios](https://www.npmjs.com/package/axios)

[Dyma](https://dyma.fr/developer/list/chapters/core)

[Youtube](https://www.youtube.com/watch?v=Iv4VIBEBHKk&ab_channel=FromScratch-Led%C3%A9veloppementWebdez%C3%A9ro)




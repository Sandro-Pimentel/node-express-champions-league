# Complementando uma api rest com express

> _Status do projeto: Finalizado._

## Descrição do Projeto

Foi criada uma api rest com express e typescript, tema envolvendo clubes da champions league. Foram criadas as rotas de get para os clubes e jogadores e as rotas post, patch e delete para os jogadores.

## Endpoints

### ```POST - /api/v1/players```

**Descrição:** Insere um jogador com o seguinte modelo:

```
{
    name: "Virgil Van Djik",
    clubId: 5,
    nationality: "Dutch",
    position: "Defender",
    statistics: {
        "overall": 94,
        "attacking": 70,
        "dribbling": 56,
        "defending": 86,
        "passing": 71,
        "physicality": 84,
        "goalkeeping": 40
    }
},
```

### ```GET - /api/v1/players```

**Descrição:** Retorna os jogadores no seguinte modelo:

```
[
    {
        "id": 1,
        "name": "Mohamed Salah",
        "clubId": 5,
        "nationality": "Egyptian",
        "position": "Right Forward",
        "statistics": {
            "overall": 94,
            "attacking": 84,
            "dribbling": 86,
            "defending": 49,
            "passing": 71,
            "physicality": 81,
            "goalkeeping": 40
        }
    },
    {
        "id": 2,
        "name": "Erling Haaland",
        "clubId": 3,
        "nationality": "Norwegian",
        "position": "Striker",
        "statistics": {
            "overall": 95,
            "attacking": 91,
            "dribbling": 67,
            "defending": 56,
            "passing": 64,
            "physicality": 83,
            "goalkeeping": 40
        }
    }
]
```

#### **Query Strings:** 

**?name=** para filtrar os players pelo nome

```/api/podcasts/?name=lah```

```
[
    {
        "id": 1,
        "name": "Mohamed Salah",
        "clubId": 5,
        "nationality": "Egyptian",
        "position": "Right Forward",
        "statistics": {
            "overall": 94,
            "attacking": 84,
            "dribbling": 86,
            "defending": 49,
            "passing": 71,
            "physicality": 81,
            "goalkeeping": 40
        }
    },
    {
        "id": 13,
        "name": "Dusan Vlahović",
        "clubId": 16,
        "nationality": "Serbian",
        "position": "Centre Forward",
        "statistics": {
            "overall": 83,
            "attacking": 80,
            "dribbling": 68,
            "defending": 59,
            "passing": 69,
            "physicality": 75,
            "goalkeeping": 40
        }
    }
]
```

**?nationality=** para filtrar os players pela nacionalidade:

```/api/podcasts/?nationality=it```

```
[
    {
        "id": 12,
        "name": "Manuel Locatelli",
        "clubId": 16,
        "nationality": "Italian",
        "position": "Defensive Midfielder",
        "statistics": {
            "overall": 83,
            "attacking": 68,
            "dribbling": 74,
            "defending": 72,
            "passing": 78,
            "physicality": 73,
            "goalkeeping": 40
        }
    }
]
```

**?position=** para filtrar os players pela posição:

```/api/podcasts/?position=right m```

```
[
    {
        "id": 14,
        "name": "Timothy Weah",
        "clubId": 27,
        "nationality": "American",
        "position": "Right Midfielder",
        "statistics": {
            "overall": 79,
            "attacking": 71,
            "dribbling": 72,
            "defending": 62,
            "passing": 66,
            "physicality": 76,
            "goalkeeping": 40
        }
    }
]
```

### ```GET - /api/v1/players/:id```

**Descrição:** Retorna o jogador com base no id no seguinte modelo:

```
{
    "id": 1,
    "name": "Mohamed Salah",
    "clubId": 5,
    "nationality": "Egyptian",
    "position": "Right Forward",
    "statistics": {
        "overall": 94,
        "attacking": 84,
        "dribbling": 86,
        "defending": 49,
        "passing": 71,
        "physicality": 81,
        "goalkeeping": 40
    }
}
```

### ```PATCH - /api/v1/players/:id```

**Descrição:** Altera parcialmente o jogador com base no id e no seguinte modelo:

```
{
    "name": "Virgil Van Djik",
    "clubId": 5,
    "nationality": "Dutch",
    "position": "Defender"
}
```

### ```PATCH - /api/v1/players/stats/:id```

**Descrição:** Altera o status do jogador com base no id e no seguinte modelo:

```
{
    "overall": 94,
    "attacking": 70,
    "dribbling": 56,
    "defending": 86,
    "passing": 71,
    "physicality": 84,
    "goalkeeping": 40
}
```

### ```DELETE - /api/v1/players/:id```

**Descrição:** Apaga o jogador com base no id:

```
{
    "message": "Successfull"
}
```

### ```GET - /api/v1/players```

**Descrição:** Retorna os jogadores no seguinte modelo:

```
[
  {
        "id": 1,
        "name": "Paris Saint-Germain",
        "country": "France"
    },
    {
        "id": 2,
        "name": "Real Madrid",
        "country": "Spain"
    }
]
```

#### **Query Strings:** 

**?name=** para filtrar os clubs pelo nome

```/api/podcasts/?name=ar```

```
[
    {
        "id": 1,
        "name": "Paris Saint-Germain",
        "country": "France"
    },
    {
        "id": 9,
        "name": "Barcelona",
        "country": "Spain"
    }
]
```
**?country=** para filtrar os clubs pelo país

```/api/podcasts/?country=s```

```
[
    {
        "id": 2,
        "name": "Real Madrid",
        "country": "Spain"
    },
    {
        "id": 9,
        "name": "Barcelona",
        "country": "Spain"
    },
]
```

## Como rodar

Ao baixar o projeto instale as dependências com:

```
npm install
```

Para rodar a aplicação use o comando:

```
npm run start
```

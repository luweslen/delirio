# Delirio CLI

## Instalar Dependências

```bash
bun install
```

## Comandos

### Colaborador

#### Criar colaborador

Comando:
```bash
bun dev collaborator create
```

Resposta:
```bash                                     
$ bun src/cli.ts collaborator create
? Qual é o nome do colaborador? Exemplo
? Qual é o papel do colaborador? Desenvolvedor
? Qual time está participando? Squad 1, Squad 4
? Qual é o username no slack do colaborador? exemplo
? Qual é o link do slack do colaborador? http://slack.com/exemplo
Colaborador criado com sucesso
```

#### Criar múltiplos colaboradores

Comando:
```bash
bun dev collaborator create-bulk --path ./tmp/collaborators.example.json
```

Opções:
Flag | Descrição 
:--------- | :------:
--path | Caminho do arquivo JSON

### Daily

Comando:
```bash
bun dev collaborator daily --team s3
```

Opções:
Flag | Descrição 
:--------- | :------:
--team | Time selecionado

### Weekly

Comando:
```bash
bun dev collaborator weekly 
```

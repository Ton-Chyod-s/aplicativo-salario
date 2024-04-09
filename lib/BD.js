const { create_engine, Table, Column, Integer, String, MetaData } = require('sqlalchemy');

async function main(valor, date) {
  // Cria uma engine para se conectar ao banco de dados SQLite
  const engine = create_engine('sqlite:///salario.db', { echo: true });

  // Define um objeto MetaData para armazenar definições de tabelas
  const metadata = new MetaData();

  // Define uma tabela chamada 'users'
  const usersTable = Table('users', metadata,
    Column('id', Integer, { primary_key: true }),
    Column('salario', String),
    Column('data', Integer)
  );

  // Cria as tabelas no banco de dados
  await metadata.create_all(engine);

  // Conexão ao banco de dados
  const connection = await engine.connect();

  // Insere alguns dados na tabela 'users'
  await connection.execute(usersTable.insert(), [
    { salario: valor, data: date },
  ]);

  // Consulta todos os registros da tabela 'users'
  const result = await connection.execute(usersTable.select());

  // Exibe os resultados
  console.log(result.fetchall());

  // Fecha a conexão
  await connection.close();
}



main(2640,'04-09-2024')
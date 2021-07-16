const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const getUsername = () => 'Hello'

async function run() {

  let connection;

  try {
    connection = await oracledb.getConnection( {
      user          : "user",
      password      : 'password',
      connectString : "localhost/ORCLCDB"
    });

    const result = await connection.execute(
      `SELECT * FROM DB_SETTINGS d WHERE d.SETTINGNAME like '%api%'` // bind value for :id
    );
    console.log(result.rows);

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();

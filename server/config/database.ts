import { Sequelize } from 'sequelize';

export const sequelize: Sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT!,
    // @ts-ignore
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

export const databaseGenerate = () => {
    sequelize
        .authenticate()
        .then(() =>
            console.log(
                'Connection to DataBase is successfully set on port ' +
                    process.env.DB_PORT
            )
        )
        .catch(err => console.log(err));

    // sync db
    sequelize.sync({ force: false }).then(() => {
        console.log('Drop and re-sync db.');
    });
};

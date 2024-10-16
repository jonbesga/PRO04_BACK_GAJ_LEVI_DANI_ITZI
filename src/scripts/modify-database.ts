import DatabaseConstructor, { Database } from "better-sqlite3";

const db: Database = new DatabaseConstructor("db.sqlite3");

const data = [
    {name: "Gaj", bio: "fghjk", socials: "dfghjuik"},
    {name: "itzi"}
]

const insertData = db.prepare("INSERT INTO artists (name, bio, socials) VALUES (?, ?, ?)");

data.forEach(artist => {
    insertData.run(artist.name, artist.bio, artist.socials);
});

db.close();
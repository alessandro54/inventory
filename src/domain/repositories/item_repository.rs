use diesel::prelude::*;
use crate::db::establish_connection;
use crate::domain::models::item::Item;
use crate::db::schema::items::dsl::*;

pub fn get_all() -> Vec<Item> {
    let connection = &mut establish_connection();
    return items
        .select(Item::as_select())
        .load(connection)
        .expect("Error loading items");
}
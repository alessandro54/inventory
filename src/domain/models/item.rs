use diesel::prelude::*;
use serde::{Serialize};

#[derive(Queryable, Selectable, Serialize)]
#[diesel(table_name = crate::db::schema::items)]
#[diesel(check_for_backend(diesel::pg::Pg))]
pub struct Item {
    pub id: uuid::Uuid,
    pub name: String,
    pub description: String,
    pub quantity: i16,
    pub price: f32,
}
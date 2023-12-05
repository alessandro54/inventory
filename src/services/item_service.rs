use crate::domain::models::item::Item;
use crate::domain::repositories::item_repository;

pub fn get_many() -> Vec<Item>{
    return item_repository::get_all();
}
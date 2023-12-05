#[macro_use] extern crate rocket;

mod controllers;
mod domain;
mod db;
mod services;

use crate::controllers::*;

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", hello_controller::routes())
        .mount("/items",items_controller::routes())
}
#[macro_use] extern crate rocket;

mod controllers;
mod domain;
mod db;
mod services;

use rocket_dyn_templates::Template;
use rocket::fs::FileServer;
use crate::controllers::*;

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", root_controller::routes())
        .mount("/items",items_controller::routes())
        .mount("/public", FileServer::from("public"))
        .attach(Template::fairing())
}

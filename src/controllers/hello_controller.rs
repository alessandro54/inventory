use rocket::Route;
use rocket::response::content;
use chrono::prelude::*;

#[get("/")]
pub fn index() -> content::RawJson<String> {
    let formatted_time = Utc::now().format("%Y-%m-%d %H:%M:%S").to_string();
    let json_string = format!("{{ \"message\": \"Hello World!\", \"time\": \"{}\" }}", formatted_time);
    content::RawJson(json_string)
}

pub fn routes() -> Vec<Route> {
    routes![index]
}
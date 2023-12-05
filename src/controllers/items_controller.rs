use rocket::Route;
use rocket::response::content;

pub fn routes() -> Vec<Route> {
    routes![index]
}

#[get("/")]
pub fn index() -> content::RawJson<String> {
    let items = crate::services::item_service::get_many();

    let serialized = serde_json::to_string(&items.first()).unwrap();

    content::RawJson(serialized)
}
use rocket::Route;
use rocket_dyn_templates::{Template, context};
pub fn routes() -> Vec<Route> {
    routes![index]
}

#[get("/")]
pub fn index() -> Template {
    let items = crate::services::item_service::get_many();

    let serialized = serde_json::to_string(&items.first()).unwrap();
//
//     content::RawJson(serialized)

    Template::render("items/index", context! { items: serialized })
}

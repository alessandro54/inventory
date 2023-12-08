use rocket::Route;
use rocket_dyn_templates::{Template, context};

#[get("/")]
pub fn index() -> Template {
    return Template::render("index", context! {});
}

pub fn routes() -> Vec<Route> {
    routes![index]
}

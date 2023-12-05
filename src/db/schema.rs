// @generated automatically by Diesel CLI.

diesel::table! {
    items (id) {
        id -> Uuid,
        #[max_length = 255]
        name -> Varchar,
        description -> Text,
        quantity -> Int2,
        price -> Float4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

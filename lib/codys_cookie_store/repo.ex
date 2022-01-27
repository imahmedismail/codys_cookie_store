defmodule CodysCookieStore.Repo do
  use Ecto.Repo,
    otp_app: :codys_cookie_store,
    adapter: Ecto.Adapters.Postgres
end

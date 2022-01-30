defmodule CodysCookieStoreWeb.IndexController do
  use CodysCookieStoreWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def personal_details(conn, _params) do
    render(conn, "personal_details.html")
  end
end

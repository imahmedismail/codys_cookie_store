defmodule CodysCookieStoreWeb.PageController do
  use CodysCookieStoreWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end

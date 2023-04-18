class PostsController < ApplicationController

  def index
    @posts = Post.order(id:"DESC")
  end

  #def new
  #end

  def create
    #binding.pry
    post = Post.create(content: params[:content])
    render json:{post: post}
    #render json:{キー:オブジェクトの値}→json形式でキーと値のセットをJSに送信
    #部分テンプレートでのrenderと違う。コントローラーに書く場合はレスポンスの生成
  end
end

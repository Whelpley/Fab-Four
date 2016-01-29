get '/' do

  erb :index
end

post '/new_cell' do
  {selector: cell_id, color: color}
end

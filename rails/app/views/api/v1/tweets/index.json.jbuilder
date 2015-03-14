json.array!(@tweets) do |tweet|
  json.extract! tweet, :id, :content, :screen_name, :name
end

json.array!(@users) do |user|
  json.extract! user, :id, :uuid, :name, :score
end

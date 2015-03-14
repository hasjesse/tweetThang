json.array!(@rounds) do |round|
  json.extract! round, :id, :judge_id
end

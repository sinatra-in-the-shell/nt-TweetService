class CreateFtsIndexTweet < ActiveRecord::Migration[5.2]
  def up
    execute "CREATE INDEX tweet_text_fts_idx
            ON tweets USING gin(to_tsvector('english', text));"
  end

  def down
    execute 'DROP index IF EXISTS tweet_text_fts_idx;'
  end
end


# CREATE index #{index_name_for(model, column)}
# ON #{model.table_name}
# USING gin(to_tsvector('#{dictionary}', "#{model.table_name}"."#{column}"::text));
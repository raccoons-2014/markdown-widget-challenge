class CreateMarkdownTexts < ActiveRecord::Migration
  def change
    create_table :markdown_texts do |t|
      t.text     :content

      t.timestamps
    end
  end
end

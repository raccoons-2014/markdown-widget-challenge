class MarkdownText < ActiveRecord::Base
  validates :text, presence: true
end

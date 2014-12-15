class Text < ActiveRecord::Base
  validates :content, presence: true
end

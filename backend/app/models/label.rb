class Label < ApplicationRecord
    validates :l_name, presence: true, uniqueness: { case_sensitive: false,
        message: "label name is already in use" }
end

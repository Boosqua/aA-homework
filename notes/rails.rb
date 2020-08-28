rails new $$$ 
bundle exec rails generate migration CreateUsers

t.string :username, null: false
t.string :email, null: false
t.timestamps
end



add_index :users, :username, unique: true
add_index :users, :email, unique: true
add_index :table_name :column_name, unique: true 


bundle exec rails g migrations AddAgeAndPAToUsers
add_column :users, :political_affiliation, :string, null: false
add_column :users, :age, :integer, null: false
add_column :table_name, :column_name, :data_type, null: false

belongs_to :student
primary_key: :id
foreign_key: :student_id
class_name: :Student

has_many :chrip
primary_key: :id
foreign_key: :author_id
class_name: :Chirp

vallidates :chirp_id, uniqueness: {scope: :liker_id}

add_index :likes, [:liker_id, :chirp_id], unique: true  

has_many :stuff,
  through: :previous_has_many,
  source: :where_im_going/method_name

  bundle exec rails db:seed
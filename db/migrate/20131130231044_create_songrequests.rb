class CreateSongrequests < ActiveRecord::Migration
  def change
    create_table :songrequests do |t|
      t.string :title
      t.string :artist
      t.string :string
      t.string :requestor

      t.timestamps
    end
  end
end

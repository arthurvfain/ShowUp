class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :name
      t.string :location
      t.boolean :public
      t.datetime :time

      t.timestamps
    end
  end
end

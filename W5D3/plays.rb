require 'sqlite3'
require 'singleton'

class PlayDBConnnection < SQLite3::Database
  include Singleton

  def initialize
    super('plays.db')
    self.type_translation = true
    self.results_as_hash = true
  end
end

class Play
  attr_accessor :title, :yr, :playwright_id
  def self.all
      data = PlayDBConnnection.instance.execute("SELECT * FROM plays")
      data.map { |datume| Play.new(datume)}
  end

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @yr = options['yr']
    @playwright_id = options['playwright_id']
  end

  def create 
    raise "#{self} already in database" if @id
    PlayDBConnnection.instance.execute(<<-SQL, @title, @yr, @playwright_id)
      INSERT INTO
        plays (title, yr, playwright_id)
      VALUES
        (?, ?, ?)
    SQL
    @id = PlayDBConnnection.instance.last_insert_row_id
  end

  def update
    raise "#{self} not in database" unless @id
    PlayDBConnnection.instance.execute(<<-SQL, @title, @yr, @playwright_id, @id)
      UPDATE
        plays
      SET
        title = ?, yr = ?, playwright_id = ?
      WHERE
        id = ?
    SQL
  end
end

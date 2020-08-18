# require "byebug"
class Board
  attr_accessor :cups, :valid, :invalid

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14) { Array.new }
    place_stones
  end

  def place_stones
    (0..5).each { |i| @cups[i] += [:stone, :stone, :stone, :stone] }
    (7..12).each { |i| @cups[i] += [:stone, :stone, :stone, :stone] }
  end
  def empty?(pos)
    @cups[pos].empty? ? true : false
  end

  def grab_stones(pos)
    # debugger
    amount = @cups[pos].dup
    @cups[pos] = []
    amount
  end

  def players_cup(name)
    
    if name == @name1
      @invalid = 13
      @valid = 6
    else
      @valid = 13
      @invalid = 6
    end
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" if start_pos > @cups.length
    raise "Starting cup is empty" if self.empty? start_pos
  end

  def make_move(start_pos, current_player_name)
    self.players_cup(current_player_name)

    stones_in_hand = self.grab_stones(start_pos)
    
    stopping_idx = nil
    (start_pos + 1..Float::INFINITY).each do |pos|
      next if pos == @invalid 
      @cups[pos % 14] << stones_in_hand.pop 
      if stones_in_hand.empty?
        stopping_idx = (pos) 
        break
      end
    end    
    self.render
    self.next_turn(stopping_idx)
  end
  
  

  def next_turn(ending_cup_idx)
    return :prompt if ending_cup_idx % 14 == @valid
    return :switch if @cups[(ending_cup_idx % 14) ].length == 1
    ending_cup_idx % 14
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    [@cups[0..5], @cups[6...13]].any? { |side| side.all?(&:empty?)}
  end

  def winner
    if cups[13] == cups[6]
      return :draw
    elsif cups[13].length > cups[6].length
      return @name2
    else
      return @name1
    end
  end
end


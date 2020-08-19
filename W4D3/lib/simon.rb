class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    puts "Simon always win LOL"

    until @game_over
      take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    
    player_turn = self.require_sequence
    game_over = player_turn != seq
    if !@game_over 
      round_success_message
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color

    puts "Lets see if you can keep up!!"
    sleep 1
    seq.each do |color|
      system("clear") 
      puts color
      sleep 1
    end
    system("clear") 
  end

  def require_sequence
    puts "your turn in:"
    (0..3).to_a.reverse.each do |num|
      sleep 1
      system("clear") 
      puts num
    end
    system("clear")
    puts "Monkey see monkey do!"
    gets.chomp.split(" ")
  end

  def add_random_color
    new_color = COLORS.sample
    seq << new_color
  end

  def round_success_message
    puts "Wow you're amazing!"
  end

  def game_over_message
    "Told you Simon always wins..."
  end

  def reset_game
    self.seq = []
    self.sequence_length = 1
    self.game_over = false
  end
end

require 'colorize'
# require 'byebug'
class Simon
  COLORS = ["red", "blue", "green", "yellow"]
  COLOR_OUTPUT = ["red".red, "blue".blue, "green".green, "yellow".yellow]

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
    if player_turn != seq
      @game_over = true
    end
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
      puts COLOR_OUTPUT[COLORS.index(color)]

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
    player_input = []
    self.sequence_length.times do
      ####I WAS HERE
    end
    # puts "Monkey see monkey do!"
    # gets.chomp.split(" ")
  end

  def add_random_color
    new_color = COLORS.sample
    seq << new_color
  end

  def round_success_message
    puts "Wow you're amazing!"
  end

  def game_over_message
    puts "Did you mean #{seq.join(" ")}" 
    puts "Told you Simon always wins..."
  end

  def reset_game
    self.seq = []
    self.sequence_length = 1
    self.game_over = false
  end
end


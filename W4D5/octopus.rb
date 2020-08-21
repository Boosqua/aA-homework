FISH = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

def sluggish_octopus(fishies)
  max = fishies.length
  biggest_fish = ""
  (0...max).each do |i|
    fish = fishies[i]
    big_fish = true
    (0...max).each do |j|
      next if j == i
      if fishies[j].length > fish.length
        big_fish = false
      end
    end
    if big_fish && biggest_fish.length < fish.length
      biggest_fish = fish
    end
  end
  biggest_fish
end

def dominant_octopus(fishies)
  nomnomnom(fishies)[-1]
end

def nomnomnom(fishies)
  return fishies if fishies.length < 2

  pivot = [fishies.first]
  l, r = [], []

  fishies.drop(1).each do |fish|
    if fish.length > pivot[0].length
      r << fish
    elsif fish.length < pivot[0].length
      l << fish
    else
      pivot << fish
    end
  end

  nomnomnom(l) + pivot + nomnomnom(r)
end

def smart_octopus(fishies)
  big_fish = fishies[0]
  fishies.each { |fish| big_fish = fish if fish.length > big_fish.length}
  big_fish
end
p sluggish_octopus(FISH)
p dominant_octopus(FISH)
p smart_octopus(FISH)



def slow_dance(direction, tiles_array)
  tiles_array.each_with_index do |tile, index|
    return index if tile == direction
  end
end


tiles_hash = {
    "up" => 0,
    "right-up" => 1,
    "right"=> 2,
    "right-down" => 3,
    "down" => 4,
    "left-down" => 5,
    "left" => 6,
    "left-up" => 7
}

def fast_dance(direction, tiles_hash)
  tiles_hash[direction]
end

class Map
  def initialize
    @map = []
  end

  def set(key, value)
    idx_check = self.get_idx(key) 
    idx_check ? @map[idx_check][1] = value : @map << [key, value] 
  end

  def get(key)
    idx_check = self.get_idx(key)
    @map[idx_check][1] if idx_check
  end

  def delete(key)
    idx_check = self.get_idx(key)
    @map.delete_at(idx_check) if idx_check

  end

  def get_idx(key)
    @map.each_with_index { |key_value_pair, idx| return idx if key == key_value_pair[0] }
    nil
  end

  def show
    @map
  end
end
require "byebug"
class LRUCache

  def initialize(n=4)
    @cache = []
    @max_size = n
  end

  def count
    # debugger
    cache.length
  end

  def add(el)
    if count > max_size
      shift
    end
    cache << el
  end

  def show
    shown = cache.dup
    print shown
  end

  private
  attr_reader :cache, :max_size

  def shift
    cache.shift
  end
end

johnny_cache = LRUCache.new(4)

johnny_cache.add("I walk the line")
johnny_cache.add(5)

johnny_cache.count # => returns 2

johnny_cache.add([1,2,3])
johnny_cache.add(5)
johnny_cache.add(-5)
johnny_cache.add({a: 1, b: 2, c: 3})
johnny_cache.add([1,2,3,4])
johnny_cache.add("I walk the line")
johnny_cache.add(:ring_of_fire)
johnny_cache.add("I walk the line")
johnny_cache.add({a: 1, b: 2, c: 3})


johnny_cache.show
class GraphNode
attr_accessor :val, :neighbors

  def initialize(val)
    @val = val
    @neighbors = []
  end
end


a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]

def bfs(starting_node, target_value)
  queue = [starting_node]
  seen = []

  until queue.empty?
    current_node = queue.shift
    return current_node if current_node.val == target_value
    seen << current_node
    queue += current_node.neighbors.reject { |node| seen.include? node }
  end

  nil
end


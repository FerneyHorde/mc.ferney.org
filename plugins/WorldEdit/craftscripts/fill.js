// fill nearby dispensers with arrows

importPackage(Packages.com.sk89q.worldedit.blocks);

//context.checkArgs(1, -1, "<item>");

var session = context.remember();
var origin = player.getPosition();
var item = 46; //context.getItem(argv[1]);

var stack = new BaseItemStack(item, 64);

var items = [stack, stack, stack, stack, stack, stack, stack, stack, stack]

for (var x = -4; x <= 4; x++) {
  for (var y = -4; y <= 4; y++) {
    for (var z = -4; z <= 4; z++) {
      var pt = origin.add(x, y, z);
      var id = session.getBlockType(pt);

      if (id == BlockID.DISPENSER) {
        var block = session.getBlock(pt);
        block.setItems(items);
        session.setBlock(pt, block);
      }
    }
  }
}
player.print("Filled");

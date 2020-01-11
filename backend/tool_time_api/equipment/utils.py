
def increment_tool_amount(tool_object):
    tool_object.amount += 1
    tool_object.save()

def decrement_tool_amount(tool_object):
    tool_object.amount -= 1
    tool_object.save()

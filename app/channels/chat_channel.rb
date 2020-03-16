class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(text)
    #ChatMessage.create(user_id: sender.id, content: message)
    params = {action: 'receive_message', comment: text}
    ActionCable.server.broadcast 'chat_channel', params
  end
end

function BookingSummary({ selectedRooms }) {
    const isRoomsArray = Array.isArray(selectedRooms);
  
    return (
      <div className="fixed right-0 top-0 h-screen bg-white shadow-lg p-4">
        <h2 className="font-bold text-lg mb-2 text-gray-800">Booking Summary</h2>
        {isRoomsArray && selectedRooms.length > 0 ? (
          <ul>
            {selectedRooms.map((room, index) => (
              <li key={room.id || index} className="mb-2"> 
                <p>Room: {room.title}</p>
                <p>Rate: {room.currency} {room.rate}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No rooms added.</p>
        )}
      </div>
    );
  }
  
  export default BookingSummary;
  
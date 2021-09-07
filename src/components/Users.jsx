import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";

import NewInput from "./NewInput";

function Users() {
  
    const [users, setUsers] = useState([{ id: 0, name: "Equipo dinamita" }]);

    const onClick = () => {
      setUsers([...users, { id: users.length, name: "Entregable" }])
    };

    var dataComponent = {
      type: 'button',
      value: 'Update',
      hidden: false
    }

    return (
      <div>
        <NewInput onClick={onClick} {...dataComponent} />
        <div>
          {users.map((e) => (
            <div>
              {e.id} - {e.name}
            </div>
          ))}
        </div>
      </div>
  )
}

export default Users;
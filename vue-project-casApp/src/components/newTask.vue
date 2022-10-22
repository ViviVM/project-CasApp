<template>
    <div class="container-sm">
    <h1>Category</h1>
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected>Category</option>
                <option value="kitchen">Kitchen</option>
                <option value="bathroom">Bathroom</option>
                <option value="pet">Pet</option>
                <option value="room">Room</option>
            </select>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">
            <input class="form-control form-control-lg" type="text" placeholder="Task name">
        </li>
        <li class="list-group-item">
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> Assing </span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            </div>
        </li>
        <li class="list-group-item">
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> How Long? </span>
                <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> Due Date </span>
                <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            </div>
          <!--  <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default"> Repeat </span>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            </div> -->
        </li>
        </ul>
        <div class="card-body">
            <input class="btn btn-primary dropdown-toggle-split" type="button" value="Save">
            <a href="#" class="card-link dropdown-divider">Delete task</a>
        </div>
    </div>
   
    </div>  
</template>

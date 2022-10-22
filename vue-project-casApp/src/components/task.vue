<template>
    <div class="container-sm">
        <h1>Task</h1>
        <div class="position-relative my-4 pb-4 pt-4 px-1">
            <button type="button" class="btn btn-success btn-sm position-absolute top-50 end-50 translate-middle">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
        <a class="pb-4 pt-4 px-4" href="/add.html">New task</a>
        </button>
        </div>
        
        <table class="table table-striped table-hover">
            <thead>
            <tr>
                <th scope="col">Check</th>
                <th scope="col">Task</th>
                <th scope="col">User</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                    </div>
                </th>
                <td>
                    <a href="#" class="link-info">Clean home</a>
                </td>
                <td>@cris @vivi</td>
            </tr>
            <tr>
                <th scope="row">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                    </div>
                </th>
                <td>
                    <a href="#" class="link-info">Clean bathroom</a>
                </td>
                <td>@Vivi</td>
            </tr>
            <tr>
                <th scope="row">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                    </div>
                </th>
                <td>
                    <a href="#" class="link-info">Clean kitchen</a>
                </td>
                <td>@Cris</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style>

.btn a {
    color: aliceblue;
    text-decoration: none;
}

</style>
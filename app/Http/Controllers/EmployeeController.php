<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    public function index()
    {
        return Inertia::render('Employee/Index', [
            'employees' => Employee::all(),
            'baseURL' => route('employee.index'),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'email' => ['required', 'email'],
            'address' => 'required',
        ]);

        $employee = Employee::create($data);

        return response()->json($employee, 201);
    }

    public function show(Employee $employee)
    {
        return Inertia::render('Employee/Show', [
            'employee' => $employee
        ]);
    }

    public function update(Request $request, Employee $employee)
    {
        $data = $request->validate([
            'name' => 'required',
            'email' => ['required', 'email'],
            'address' => 'required',
        ]);

        $employee->update($data);

        return response()->json($employee);
    }

    public function destroy(Employee $employee)
    {
        $employee->delete();

        return response()->noContent();
    }
}

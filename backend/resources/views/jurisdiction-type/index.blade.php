@extends('layouts.master')
@php $nav_path = ['jurisdiction-type']; @endphp
@section('page-title', 'Jurisdiction Types')
@section('page-header-title', 'Jurisdiction Types')
@section('page-help-link', '#TODO')
@section('page-header-breadcrumbs')
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
        <li class="breadcrumb-item active" aria-current="location">Jurisdiction Types</li>
    </ol>
@endsection
@section('content')
    <jurisdiction-type-grid :params="{
            Page: '{{ $page }}',
            Search: '{{ $search }}',
            sortOrder: '{{ $direction }}',
            sortKey: '{{ $column }}',
            CanAdd: '{{ $can_add }}',
            CanEdit: '{{ $can_edit }}',
            CanShow: '{{ $can_show }}',
            CanDelete: '{{ $can_delete }}',
            CanExcel: '{{ $can_excel }}'
        }"></jurisdiction-type-grid>
@endsection

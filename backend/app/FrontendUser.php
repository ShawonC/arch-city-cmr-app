<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\RecordSignature;

class FrontendUser extends Model
{

    use SoftDeletes;
    use RecordSignature;

    /**
     * fillable - attributes that can be mass-assigned
     */
    protected $fillable = [
        'id',
        'email',
        'name',
        'password',
    ];

    protected $hidden = [
        'active',
        'created_at',
        'updated_at',
    ];

    public function applicant()
    {
        return $this->hasOne('App\Applicant');
    }

    public function add()
    {
        try {
            $this->fill($attributes);
            $this->password = bcrypt($this->password);

            $this.save();
        } catch (\Exception $e) {
            info(__METHOD__ . ' line: ' . __LINE__ . ':  ' . $e->getMessage());
            throw new \Exception($e->getMessage());
        } catch (\Illuminate\Database\QueryException $e) {
            info(__METHOD__ . ' line: ' . __LINE__ . ':  ' . $e->getMessage());
            throw new \Exception($e->getMessage());
        }

        return true;
    }

    public function canDelete()
    {
        return true;
    }

    /**
     * Get Grid/index data PAGINATED
     *
     * @param $per_page
     * @param $column
     * @param $direction
     * @param string $keyword
     * @return $mixed
     */
    static function indexData(
        $per_page,
        $column,
        $direction,
        $keyword = ''
    )
    {
        \DB::connection()->enableQueryLog();

        return self::buildBaseGridQuery($column, $direction, $keyword,
            [
                'id',
                'email',
                'name',
                'password'
            ]
        )
        ->paginate($per_page);
    }

    /**
     * Create base query to be used by Grid, Download, and PDF
     *
     * NOTE: to override the select you must supply all fields, ie you cannot add to the
     *       fields being selected.
     *
     * @param $column
     * @param $direction
     * @param string $keyword
     * @param string|array $columns
     * @return mixed
     */

     static function buildBaseGridQuery(
         $column,
         $direction,
         $keyword = '',
         $columns = '*')
    {
        // Map sort direction from 1/-1 integer to asc/desc sql keyword
        switch ($direction) {
            case '1':
                $direction = 'desc';
                break;
            case '-1':
                $direction = 'asc';
                break;
            default:
                $direction = 'asc';
                break;
        }

        $query = FrontendUser::select($columns)
            ->orderBy($column, $direction);
        $query->orderBy('name', 'ASC'); // Secondary sort criteria of name

        if ($keyword) {
            $query->where(function($query) use ($keyword) {
                $query->where('name', 'like', '%' . $keyword . '%')
                    ->orWhere('email', 'like', '%' . $keyword . '%');
            });
        }
        return $query;
    }
}
